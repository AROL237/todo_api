pipeline {
    agent { docker {image 'node:24.15.0-alpine3.23' } }
    stages {
        stage('Checkout'){
            step{
                echo 'Pulling leatest update.'
                ll 
                cat .env

            }
        }
        stage('build') {
         step{
            echo "building "
            sh '''
            rm -rf ./node_modules
            npm install  
           '''
         }
        }
        stage()
    }
    post{
        success {
            sh 'SUCCESSFUL CICD'
           archiveArtifacts artifacts: '*', fingerprint: true
        }
    }
}
