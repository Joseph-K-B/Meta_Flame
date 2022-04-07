##Nonsense
HTML is more or less self explanatory I assume, 
the few notes I will leave;
displaying HTML in a three scene can be handled in a litany of manners
//
position elements absolute and conditionally display them according to state
//
drei offers Html component which can be attatched to 3d-objs for handling on a local level
example of this would be the Text tag in META folder
it's not actually Html(Text uses 3-d glyphs)
same concept though it's attatched to the group for that model so it lives in that local space
and transitions accordingly
//
another approach is to move your scene around your html
check out scroll controls(drei) or if you have access to three-journey
the lesson on scroll based animation is a good example of vanilla
you can trigger behaviour and animation based on intersects
whether it be an HTML element or three obj
//

I prefer the former option but I'm still dialing in the wheel and swipe events we discussed over discord
//
The drawer is just a helper gui I set on most projects to fiddle with states and variables