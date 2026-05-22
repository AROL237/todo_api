pipeline {
    agent any
    environment {
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
        // NEXT_PUBLIC_API_BaseUrl ="/api"
        IMAGE_NAME = "signing/todo_api"
        IMAGE_TAG = "1.0.${BUILD_NUMBER}"
    }
    stages {
        stage('Checkout'){
            steps{
                checkout(scm: git(url: 'https://github.com/AROL237/todo_api',branch: 'master'))
            }
        }
        stage('Build') {
           
            steps{
                echo "building image , artifacts."
               def newImage = docker.build("${IMAGE_NAME}:${IMAGE_TAG}")
               sh 'docker images'
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
