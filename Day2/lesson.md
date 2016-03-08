# Events

_Is JavaScript asynchronous or synchronous?_

callbacks, server calls, setTimeout; single-threaded in nature but looks like asynchronous.

**Imperative vs event-driven**

The difference between a method directly changing state and methods waiting for events before executing; being forced to do something vs reacting to events.

**EventEmitter**

Documentation:  
https://nodejs.org/api/events.html  
http://devdocs.io/node/

Listening (subscribing) to events and emitting events ([events1.js](events1.js))

Listening only once to an event

Removing listeners

Events for when a listener is added and removed  
Does order matter?

## Projects

**Build a completely event-driven application: Elevator**

Everything should be an event
Simulate elapsed time with setTimeout

-> push floor number button  
-> shut door  
-> go to correct floor  
-> open door  
-> ?

What if you are already on the correct floor?
What if you push multiple floor buttons?
Does the timing of pushing different floor buttons matter?
What if you push the door-open button after the door has already begun to close?
What if you push the alarm button?

**Integrate real user input**

Build a simple html page  
or `npm install prompt`

**More**

Code school - real-time web with node.js, level 2
