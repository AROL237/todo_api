pipeline {
    agent any
    environment {
        NPM_CONFIG_CACHE = "${WORKSPACE}/.npm"
        NEXT_PUBLIC_API_BaseUrl ="/api"
    }
    stages {
        stage('Loading version'){
           
            steps{
                echo 'Application version'
                
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
                withCredentials([usernamePassword(
                    credentialsId: 'my-docker-access-token',
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS'
                )]){
                    sh '''
                    export TAG=$(cat app.version)
                    printf "\nNew build version : $TAG\n"
                    echo '$PASS' | docker login -u '$USER' --password-stdin
                    docker tag  todo_api:"${BUILD_NUMBER}" '$USER'/todo_api:'$TAG'
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
