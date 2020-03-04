# LUNAMON

LunaMon is a monitoring system of Luna (My cat).

This is a fun project to try different technologies.

## Using a standard USB webcam

Following [this Raspberry Pi tutorial](https://www.raspberrypi.org/documentation/usage/webcams/) we can connect to our USB webcam and run the `fswebcam` command to take an image.

1. Install fswebcam `sudo apt install fswebcam`
2. If you are not using the default pi user account run `sudo usermod -a -G video <username>`
3. Take an image with `fswebcam image.jpg`