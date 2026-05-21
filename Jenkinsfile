pipeline {
    agent { docker {image 'node:24' } }
    environment {
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
    }
    stages {
        stage('Checkout'){
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
                rm -rf ./node_modules
                npm ci --force
            '''
            }
        }
    }
    post{
        success {
            sh 'SUCCESSFUL CICD'
           archiveArtifacts artifacts: '*', fingerprint: true
        }
        always{
             echo'Clean Workspace'
             cleanWs()
        }
        }
}
