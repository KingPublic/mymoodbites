pipeline {
    agent any

    tools {
        nodejs 'Node 24.15.0'
    }

    environment {
        REMOTE_DEPLOY_DIR = '/var/www/landingPage'
        HOST_IP           = '103.185.52.161'
        HOST_USER         = 'moodbites'
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
                sh '''
                    if [ -d node_modules ]; then
                        npm ci
                    else
                        npm install
                    fi
                '''
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
                        echo ">>> Bersihkan deploy dir di remote..."
                        ssh -i $SSH_KEY -o StrictHostKeyChecking=no \
                            $SSH_USER@${HOST_IP} \
                            "find ${REMOTE_DEPLOY_DIR} -mindepth 1 ! -name 'moodbites.apk' ! -name '.htaccess' -delete 2>/dev/null || true"

                        echo ">>> Copy dist ke remote..."
                        scp -i $SSH_KEY -o StrictHostKeyChecking=no \
                            -r dist/. $SSH_USER@${HOST_IP}:${REMOTE_DEPLOY_DIR}/

                        echo ">>> Selesai!"
                    '''
                }
            }
        }
    }

    post {
        success {
            echo '✅ Deployment berhasil! Landing page sudah live.'
        }
        failure {
            echo '❌ Deployment gagal. Cek log di atas untuk detail.'
        }
    }
}
