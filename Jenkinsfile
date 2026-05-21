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
                echo 'Application version'
                 script {
                    def version = sh(script: 'cat app.version', returnStdout: true).trim()
                    env.IMAGE_TAG = version
                    // echo "IMAGE_TAG = ${env.IMAGE_TAG}"
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
                echo "Deploying application to production"
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
