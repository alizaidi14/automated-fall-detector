/**
 * This is a sample Lambda function that sends an SMS notification when your
 * AWS DeepLens device detects a fallen.
 * 
 * Follow these steps to complete the configuration of your function:
 *
 * Update the phone number environment variable with your phone number.
 */

# written in Node.js 10.x
# Handler: index.handler
# Tutorial/Reference: https://docs.aws.amazon.com/deeplens/latest/dg/deeplens-extend.html

#must add a trigger to this function from IoT Core in order for a text to be sent when someone has fallen
#can modify to trigger from any event that is desired.

const AWS = require('aws-sdk');


/*
*   Be sure to add email and phone_number to the function's environment variables
*/

const phone_number = process.env.phone_number;
const SNS = new AWS.SNS({ apiVersion: '2010-03-31' });

exports.handler = (event, context, callback) => {
    console.log('Received event:', event);

    // publish message
    const params = {
        Message: 'Fallen Person Detected! Assistance Required!',
        PhoneNumber: phone_number
    };
    if (event.fallen > 0.5) {
        SNS.publish(params, callback);
    }
};