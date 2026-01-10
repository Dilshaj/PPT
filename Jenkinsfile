pipeline {
    agent any
    tools {
        nodejs 'NodeJS'
    }
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Run') {
            steps {
                sh '''
                pm2 delete ppt || true
                pm2 start npm --name ppt -- start
                '''
            }
        }
    }
}
