#include <Sparkfun_DRV2605L.h>
#include <Wire.h>

SFE_HMD_DRV2605L HMD;

int trigPin = 3;
int echoPin = 2;
const int analogOutPin = 9; // Analog output pin that the Haptic Motor Driver is attached to
int sensorValue = 0;        // value read from the sensor
int outputValue = 0;        // value output to the PWM (analog out)

void setup() 
{
  HMD.begin();
  Serial.begin(9600);
  HMD.Mode(0x03); //PWM INPUT 
  HMD.MotorSelect(0x0A);
  HMD.Library(7); //change to 6 for LRA motors 
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
}

void loop() {
  long duration, distance;
  digitalWrite(trigPin, HIGH);
  digitalWrite(trigPin, LOW);
  duration = pulseIn(echoPin, HIGH);
  distance = (duration/2) / 29.1;
  
  analogWrite(analogOutPin, 150);
  if (distance < 20){
    analogWrite(analogOutPin, 20);
  }
  else if (20 <= distance && distance < 50){
    analogWrite(analogOutPin, 70);
    Serial.println("MIDDLE THING");
  }

  Serial.print("Distance: ");
  Serial.println(distance);
  Serial.print("\t output = ");
  Serial.println(outputValue);

  // wait 2 milliseconds before the next loop
  // for the analog-to-digital converter to settle
  // after the last reading:
  delay(200);
 }

