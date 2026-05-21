pipeline {
    agent { docker {image 'node:24.15.0-alpine3.23' } }
    stages {
        stage('Checkout'){
            steps{
                echo 'Pulling leatest update.'
                ll 
                cat .env

            }
        }
        stage('build') {
            steps{
                echo "building "
                sh '''
                rm -rf ./node_modules
                npm install  
            '''
            }
        }
    }
    post{
        success {
            sh 'SUCCESSFUL CICD'
           archiveArtifacts artifacts: '*', fingerprint: true
        }
    }
}
