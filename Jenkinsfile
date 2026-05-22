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
                    // Tulis script bash ke workspace Jenkins
                    writeFile file: 'deploy.sh', text: '''#!/bin/bash
set -e

echo ">>> Git pull..."
cd /home/moodbites/mymoodbites
git pull

echo ">>> Install dependencies..."
if [ -d node_modules ]; then
    npm ci
else
    npm install
fi

echo ">>> Build..."
npm run build

echo ">>> Bersihkan deploy dir..."
find /var/www/landingPage -mindepth 1 \
    ! -name "moodbites.apk" \
    ! -name ".htaccess" \
    -delete 2>/dev/null || true

echo ">>> Copy dist..."
cp -r /home/moodbites/mymoodbites/dist/. /var/www/landingPage/

echo ">>> Selesai!"
ls -lah /var/www/landingPage
'''

                    sh '''
                        # Upload script ke remote
                        scp -i $SSH_KEY -o StrictHostKeyChecking=no \
                            deploy.sh $SSH_USER@${HOST_IP}:/home/moodbites/deploy.sh

                        # Jalankan dengan bash (bypass fish)
                        ssh -i $SSH_KEY -o StrictHostKeyChecking=no \
                            $SSH_USER@${HOST_IP} \
                            "bash /home/moodbites/deploy.sh; rm -f /home/moodbites/deploy.sh"
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
