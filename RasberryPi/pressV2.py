#!/usr/bin/env python2
###
### read MCP3002 ADC analog value via RasPi SPI
###

import wiringpi2 as wp
import time

# SPI channle (0 or 1)
SPI_CH = 0

# pin base (above 64)
PIN_BASE=70

# GPIO number
LED_PIN = 25

# threshold
THRESHOLD = 200

# setup
wp.mcp3002Setup (PIN_BASE, SPI_CH)
wp.wiringPiSetupGpio()
wp.pinMode(LED_PIN, wp.GPIO.OUTPUT)

# if a sensor value is over THRESHOLD,
# flash led.
while True:
    value = wp.analogRead(PIN_BASE)
    print (value)
    try:
        fout = open('./pressure.txt','w')
    except IndexError:
        print ("usage")
    except IOError:
               print ("Cannot be openned")
    else:
        fout.write("%d" %value)
        fout.close()
        time.sleep(1)
    
