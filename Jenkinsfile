pipeline {
    agent { docker { image 'node:24.15.0-alpine3.23' } }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
            }
        }
    }
}
