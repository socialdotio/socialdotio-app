# socialdotio-app

### *"Automating away the initiation of interactions."* ###

## Concept ##

Our goal is to eliminate the stress involved with starting conversations ("what if they don't text back?", etc.)

...and it does so by taking care of sending the first text after minimal setup.

First, it suggests/asks for a set of people to initiate conversations with,
by reading through your contacts and (in v2) figuring out who you text regularly and/or who responds positively.

Second, it suggests/asks for some canned conversation-starters - "Hi!", "yo", "sup?", and so forth.

Third, it asks for a range of times in which it should (randomly) send messages.

Then, in the background, it (at random times) sends randomly selected canned conversation-starters to 
the set of contacts who will probably respond well.

Finally, through analysis of a corpus built from previous messages, the app can suggest topics of conversation 
to present to help grease the wheels when you're participating in conversation.

## TODO ##

+ Get SMS-reading working. *(I spent a good 4 hours plus banging my head against the wall on this --MC)*
+ Re-implement social dot eye oh in Java / Android Studio instead of (or in addition to) Sublime / Ionic
+ Make the time-picker look nicer in Ionic (? - or just nix it and build it per Android Studio requirements, hm.)
+ Notifications upon replies from random contacts, which will include a "we suggest talking about ______".

----------

"Eventually, it'll just be a bunch of robots talking to other robots, 
scheduling meetings and driving conversations for their owners."
