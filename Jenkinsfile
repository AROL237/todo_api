pipeline {
    agent { docker {image 'node:24' } }
    stages {
        stage('Checkout'){
            stage('Clean Workspace') {
                steps {
                    cleanWs()
            }
}
            steps{
                echo 'Pulling leatest update.'
              
              sh''' 
                    cat .env
                '''

            }
        }
        stage('build') {
            steps{
                echo "building "
                sh '''
                chown -R 111:113 "/.npm"
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
