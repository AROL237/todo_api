pipeline {
    agent any
    environment {
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
        IMAGE_TAG ="${BUILD_NUMBER}"
        NEXT_PUBLIC_API_BaseUrl ="/api"
    }
    stages {
        stage('Loading version'){
           
            steps{
                echo 'Application version'
                
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
