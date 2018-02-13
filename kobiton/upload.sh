source payloads.sh

USER_TOKEN=$(node -e "console.log(($(curl -sk "$SERVER_NAME/users/login" -X POST -d '{"emailOrUsername": "'$USER_NAME'","password": "'$PASSWORD'"}' -H 'Content-type: application/json')).token)")

# generate upload url 
# https://api.kobiton.com/docs/#generate-upload-url
UPLOAD_URL_PATH=$(curl -s "$SERVER_NAME/apps/uploadUrl" -X POST -d '{"filename": "Wiki.apk"}' -H 'Content-type: application/json' -H "Authorization: Bearer $USER_TOKEN")

# extract params for upload to aws and path for creation app
UPLOAD_URL=$(node -e "console.log(JSON.parse(JSON.stringify($UPLOAD_URL_PATH)).url)")
APP_PATH=$(node -e "console.log(JSON.parse(JSON.stringify($UPLOAD_URL_PATH)).appPath)")
# upload file to AWS storage
# # https://api.kobiton.com/docs/#upload-file-to-s3
AWS_STATUS=$(curl --silent --write-out "HTTPSTATUS:%{http_code}" -T $FILE_PATH -H "Content-Type: application/octet-stream" -H "x-amz-tagging: unsaved=true" -X PUT $UPLOAD_URL)

# if status code 200 create app
if [[ $AWS_STATUS = *"200"* ]]; then
  # create new app
  # https://api.kobiton.com/docs/#create-application-or-version
  APP_CREATION_BODY=$(curl -s "$SERVER_NAME/apps" -X POST -d '{"filename": "Wiki.apk", "appPath": "'$APP_PATH'"}' -H 'Content-type: application/json' -H "Authorization: Bearer $USER_TOKEN")
  echo $APP_CREATION_BODY
fi
