pipeline {
    agent { docker {image 'node:24' } }
    environment {
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
        IMAGE_TAG =''
        NEXT_PUBLIC_API_BaseUrl ="/api"
    }
    stages {
        stage('Loading version'){
            steps{
               script {
                    env.IMAGE_TAG = readFile('app.version').trim()
                }
                echo "---IMAGE_VERSION: ${IMAGE_TAG}---" 
            }
        }
        stage('Build') {
            steps{
                echo "building image , artifacts."
                sh '''
                    docker build -t todo_api:'$IMAGE_TAG' .
                    docker images 
                '''
            }
        }
        stage('Deployment'){
            steps{

            }
        }
    }
    post{
        success {
            echo'SUCCESSFUL CICD'
           archiveArtifacts artifacts: '**/*', fingerprint: true
        }
        always{
             echo'Clean Workspace'
             cleanWs()
        }
        }
}
