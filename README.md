# SVG animation in CSS3 without JavaScript
 In this tutorial code I show you how you can animate SVGs using **CSS3** .
 
 To animate this text, you'll need a vector graphics tool like **_Affinity Designer_** (my favorite) or **_Adobe illustrator_** - tools like **_Figma_, Sketch or _Adobe XD_** are great too - which you'll need to make the text.
  Inside the repository you will find a JS file which will be used to know the exact length of your vector.
  My first Vector is equivalent to the letter **a** and as you see in the CSS code - _see below_ - it has a value of **544**.
  
  ```diff 
  #logo path:nth-child(1) {
    stroke-dasharray: 544;
    stroke-dashoffset: 544;
    .
    .
    .
} 
```


Obviously your value will be different, so be careful to copy the console values exactly.

## Step 1
As a first step for the realization of this animation, you will have to open your favorite vector graphics software and write (in this tutorial I show you **ONLY** how to animate the texts, the shapes we will see in another repo) a text, even random, such as for example the classic _lorem ipsum_.

## Step 2
After writing your text you need to make it vector. Then make it transparent and insert the strokes to your text, this step is of fundamental importance for the success of the final effect.

## Step 3
Once you have entered the strokes (_choose the color you prefer_) select the vector, **copy** it and then open your IDE. You will have to **paste** the vector previously copied into the ```body``` of your html document (mine is called ```index.html```).
