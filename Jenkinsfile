pipeline {
    agent any

    tools {
        nodejs 'Node 24.15.0'
    }

    environment {
        REMOTE_APP_DIR = '/home/moodbites/mymoodbites'
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
                sh '''
                    npm install
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
                        echo ">>> Buat folder dist di remote jika belum ada..."
                        ssh -i $SSH_KEY -o StrictHostKeyChecking=no \
                            $SSH_USER@${HOST_IP} \
                            "mkdir -p ${REMOTE_APP_DIR}/dist"

                        echo ">>> Upload dist ke remote..."
                        scp -i $SSH_KEY -o StrictHostKeyChecking=no \
                            -r dist/. $SSH_USER@${HOST_IP}:${REMOTE_APP_DIR}/dist/

                        echo ">>> Upload Dockerfile dan docker-compose..."
                        scp -i $SSH_KEY -o StrictHostKeyChecking=no \
                            Dockerfile docker-compose.yml \
                            $SSH_USER@${HOST_IP}:${REMOTE_APP_DIR}/

                        echo ">>> Docker build dan up di remote..."
                        ssh -i $SSH_KEY -o StrictHostKeyChecking=no \
                            $SSH_USER@${HOST_IP} \
                            "cd ${REMOTE_APP_DIR} && docker compose up -d --build"

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
