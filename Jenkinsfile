pipeline {
    agent any

    environment {
        REMOTE_USER        = 'moodbites'
        REMOTE_HOST        = '103.185.52.161'
        REMOTE_APP_DIR     = '/home/moodbites/mymoodbites'
        REMOTE_DEPLOY_DIR  = '/var/www/landingPage'
        SSH_CREDENTIALS_ID = 'moodbites-host-ssh'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                echo 'Checking node_modules...'
                sh '''
                    if [ -d "node_modules" ]; then
                        echo "node_modules found, running npm ci..."
                        npm ci
                    else
                        echo "node_modules not found, running npm install..."
                        npm install
                    fi
                '''
            }
        }

        stage('Build') {
            steps {
                echo 'Building project...'
                sh 'npm run build'
            }
        }

        stage('Upload dist to Remote') {
            steps {
                echo 'Uploading dist folder to remote server...'
                sshagent(credentials: [env.SSH_CREDENTIALS_ID]) {
                    sh """
                        rsync -avz --delete \
                            -e "ssh -o StrictHostKeyChecking=no" \
                            dist/ \
                            ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_APP_DIR}/dist/
                    """
                }
            }
        }

        stage('Deploy on Remote Host') {
            steps {
                echo 'Deploying to /var/www/landingPage on remote...'
                sshagent(credentials: [env.SSH_CREDENTIALS_ID]) {
                    sh """
                        ssh -o StrictHostKeyChecking=no \
                            ${REMOTE_USER}@${REMOTE_HOST} << 'ENDSSH'

                            set -e

                            DEPLOY_DIR="${REMOTE_DEPLOY_DIR}"
                            DIST_DIR="${REMOTE_APP_DIR}/dist"

                            echo ">>> Clearing \$DEPLOY_DIR (keeping moodbites.apk and .htaccess)..."

                            # Hapus semua file & folder kecuali moodbites.apk dan .htaccess
                            find "\$DEPLOY_DIR" -mindepth 1 \
                                ! -name 'moodbites.apk' \
                                ! -name '.htaccess' \
                                -delete 2>/dev/null || true

                            echo ">>> Copying dist contents to \$DEPLOY_DIR..."
                            cp -r "\$DIST_DIR"/. "\$DEPLOY_DIR"/

                            echo ">>> Deployment complete!"
                            ls -lah "\$DEPLOY_DIR"

                      ENDSSH
                    """
                }
            }
        }
    }

    post {
        success {
            echo 'Deployment berhasil! Landing page sudah live di /var/www/landingPage'
        }
        failure {
            echo 'Deployment gagal. Cek log di atas untuk detail error.'
        }
        always {
            cleanWs()
        }
    }
}
