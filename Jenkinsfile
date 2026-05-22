pipeline {
    agent any

    environment {
        REMOTE_USER        = 'moodbites'
        REMOTE_HOST        = '103.185.52.161'
        REMOTE_APP_DIR     = '~/mymoodbites'
        REMOTE_DEPLOY_DIR  = '/var/www/landingPage'
        SSH_CREDENTIALS_ID = 'moodbites-host-ssh'
    }

    stages {

        stage('Deploy via SSH') {
            steps {
                sshagent(credentials: [env.SSH_CREDENTIALS_ID]) {
                    sh """
                        ssh -o StrictHostKeyChecking=no \
                            ${REMOTE_USER}@${REMOTE_HOST} << 'ENDSSH'

                            set -e

                            echo ">>> Masuk ke direktori aplikasi..."
                            cd ~/mymoodbites

                            echo ">>> Git pull..."
                            git pull

                            echo ">>> Mengecek node_modules..."
                            if [ -d "node_modules" ]; then
                                echo "node_modules ditemukan, menjalankan npm ci..."
                                npm ci
                            else
                                echo "node_modules belum ada, menjalankan npm install..."
                                npm install
                            fi

                            echo ">>> Build project..."
                            npm run build

                            echo ">>> Membersihkan /var/www/landingPage (kecuali moodbites.apk dan .htaccess)..."
                            find /var/www/landingPage -mindepth 1 \
                                ! -name 'moodbites.apk' \
                                ! -name '.htaccess' \
                                -delete 2>/dev/null || true

                            echo ">>> Copy dist ke /var/www/landingPage..."
                            cp -r ~/mymoodbites/dist/. /var/www/landingPage/

                            echo ">>> Selesai! Isi /var/www/landingPage:"
                            ls -lah /var/www/landingPage

ENDSSH
                    """
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
