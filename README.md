# automated-fall-detector
Initial goal of this project was to automate fall detection in worker hub facilities using AWS DeepLens - ML Embedded Camera. The camera detects a fallen worker using image classification and a text message is sent to a nearby manager using AWS cloud. However, amidst COVID-19 retirement homes have lost caretakers, so the project could also apply to detecting fallen elders in retirement homes. 

### Background: 
  - The following project was completed by Colin Jones and I when we worked at Purolator as an Innovations Solutions Interns
  - Since it was an exploration project (not our main task) and could be beneficial during COVID-19 as explained above, my manager, Elizabeth Hendreson, granted me the permission to share some sneak peeks on my github for future employers :)
  - [Documentation](https://drive.google.com/file/d/1fb4BSy_Yn2PCR-3MFiN9ZP0IY4pKjeKl/view?usp=sharing) 
  - [Architecture Overview](https://drive.google.com/file/d/16-EwtBweFE5030ZlX1l9fDQh2LpX9xri/view?usp=sharing)
  - [Demo](https://drive.google.com/file/d/1SLsBEKZuDxi8qT0vcxnZ1mK0EnzK19WV/view?usp=sharing)

### Shared files: 

  - dataset_augmentation.py - Python script which augments an image dataset.
  - detection_function.py - Python based lambda function which enables the camera to make inferences in real time.
  - notifier_function.js - Node.js based lambda function which triggers a text notification when camera detects fallen person. 

### Tools Used:
  - AWS (S3, Lambda, SageMaker, CloudWatch, IoT Core, SNS, DeepLens) 

 
