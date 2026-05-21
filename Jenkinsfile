pipeline {
    agent any
    environment {
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
        NEXT_PUBLIC_API_BaseUrl ="/api"
        DOCKER_CRED =credentials('docker-access-token')
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
                    docker build -t todo_api:"${BUILD_NUMBER}" .
                    docker images 
                '''
            }
        }
        stage('PUSH IMAGE'){
            steps{
                withCredentials([
                    credentialsId: 'my-docker-access-token',
                    usernameVariable: 'USER',
                    passwordVarianle: 'PASS'

                ]){
                    sh '''

                    echo '$PASS' | docker login -u $USER --password-stdin
                    docker tag  todo_api:"${BUILD_NUMBER}" $USER/todo_api:$(cat app.version)
                    docker images
                    '''
                }
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
