pipeline {
    agent any

    environment {
        REMOTE_APP_DIR     = '/home/moodbites/mymoodbites'
        REMOTE_DEPLOY_DIR  = '/var/www/landingPage'
        HOST_IP            = '103.185.52.161'
        HOST_USER          = 'moodbites'
    }

    stages {

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
                        ssh -i $SSH_KEY -o StrictHostKeyChecking=no \
                            $SSH_USER@${HOST_IP} "
                                set -e &&
                                echo '>>> Git pull...' &&
                                cd ${REMOTE_APP_DIR} &&
                                git pull &&

                                echo '>>> Install dependencies...' &&
                                if [ -d node_modules ]; then
                                    npm ci
                                else
                                    npm install
                                fi &&

                                echo '>>> Build...' &&
                                npm run build &&

                                echo '>>> Bersihkan deploy dir...' &&
                                find ${REMOTE_DEPLOY_DIR} -mindepth 1 \
                                    ! -name 'moodbites.apk' \
                                    ! -name '.htaccess' \
                                    -delete 2>/dev/null || true &&

                                echo '>>> Copy dist...' &&
                                cp -r ${REMOTE_APP_DIR}/dist/. ${REMOTE_DEPLOY_DIR}/ &&

                                echo '>>> Selesai!' &&
                                ls -lah ${REMOTE_DEPLOY_DIR}
                            "
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'âœ… Deployment berhasil! Landing page sudah live.'
        }
        failure {
            echo 'âŒ Deployment gagal. Cek log di atas untuk detail.'
        }
    }
}
