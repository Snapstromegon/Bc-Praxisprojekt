# While you work Questionaire

COPY THIS FILE FOR YOUR COMPONENT AND VARIATION!

This questionaire is supposed to log your experiences while working on a component.

Please write down anything that comes up during development of a component.

This includes among others

- What went well
- what went badly
- problems with componer
- problems with components
- ...

### 1. Was the documentation of this component understandable? If no, what was problematic?

It was well done, apart from a few minor errors regarding grammar etc.

### 2. How long did each stage take you to implement?

- stage1: 9.5 min
- stage2: 7.5 min
- stage3: 5 min (estimated, I forgot to start the timer, but certainly less than the stages before)
- stage4: 35 min
- stage5: 50 min
- stage6: not tried

### 3. Was the difficulty rating matching what the component asked? If no, why not and how would you rate it?

It was not too hard, though I had to look up a lot of things

### 4. Did you know the concepts used in this component before implementing?

Yes, I did not do anything that was new to me, but I have not actually used async await before

### 5. If you used a build pipeline, what did you use and did you have problems setting it up?

I used none.

### 6. How would you rate the developer experience of this variation compared to the others?

From what I know about Vue, especially handling async. comment blocks coming in and sorting them, which is probably easier in that framework, given that you know how to use it properly / it can be done in less lines.

### 7. If you could add, remove or change one stage of this component, which would it be, how and why?

I think it's fine the way it is. You could give some example so that the result looks more appealing, but apart from that...

There is just one thing I did not understand: How should I display the comments? 

$Username wrote:

$Comment $Comment $Comment $Comment

^That was what you proposed. Instead, I did:

$Username
$Comment

I don't know if this is supposed to be the same or if you wanted me to add all comments by a user to one single div (-> aggregate them) instead of displaying comments one after another, with multiple divs for the same user (as it's usually done).

Regarding stage 4: I first tried another method that did not work, and finally decided to get "0 comments" first to have a total count I can work with. I wouldn't really know a proper alternative. (Just perpetually asking for the next 10 comments and checking, before every new request, if the total number of comments has already been determined and if it has already been reached, did not work for me / resulted in a 'stuck' website. I probably did something wrong there.)

### 8. If you'd need to choose one variant to implement this component again, which would you choose?

I would probably rather do this in Vue, although I have not tried it out (yet).


### Filling this questionaire took me this long:
12 minutes

### Implementing this component in this variation took me this long:
Almost 1h 50min