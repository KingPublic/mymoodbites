pipeline {
    agent any

    tools {
        nodejs 'Node 24.15.0'
    }

    environment {
        REMOTE_APP_DIR = '/var/www/landingPage'
        HOST_IP        = '103.185.52.161'
        HOST_USER      = 'moodbites'
    }

    stages {

        stage('Environment Check') {
            steps {
                sh '''
                    echo "Node: $(node -v)"
                    echo "NPM:  $(npm -v)"
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                withCredentials([
                    sshUserPrivateKey(
                        credentialsId: 'moodbites-host-ssh',
                        keyFileVariable: 'SSH_KEY',
                        usernameVariable: 'SSH_USER'
                    )
                ]) {
                    sh '''
                        echo ">>> Buat folder deployment di remote jika belum ada..."
                        ssh -i $SSH_KEY -o StrictHostKeyChecking=no \
                            $SSH_USER@${HOST_IP} \
                            "mkdir -m 775 -p ${REMOTE_APP_DIR}"

                        echo ">>> Kosongkan folder deployment di remote..."
                        ssh -i $SSH_KEY -o StrictHostKeyChecking=no \
                            $SSH_USER@${HOST_IP} \
                            find ${REMOTE_APP_DIR} -mindepth 1 -maxdepth 1 ! -name "moodbites.apk" ! -name ".htaccess" -exec rm -rf {} +

                        echo ">>> Upload dist ke remote..."
                        scp -i $SSH_KEY -o StrictHostKeyChecking=no \
                            -r dist/* $SSH_USER@${HOST_IP}:${REMOTE_APP_DIR}/

                        echo ">>> Selesai!"
                    '''
                }
            }
        }
    }

    post {
        success {
            echo '✅ Deployment berhasil! Landing page live di port 80.'
        }
        failure {
            echo '❌ Deployment gagal. Cek log di atas untuk detail.'
        }
    }
}
