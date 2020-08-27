# svg-animation
 In this tutorial code I show you how you can animate SVGs using **CSS3** .
 
 To animate this text, you'll need a vector graphics tool like **_Affinity Designer_** (my favorite) or **_Adobe illustrator_** - tools like **_Figma_, Sketch or Adobe XD_** are great too - which you'll need to make the text.
  Inside the repository you will find a JS file which will be used to know the exact length of your vector.
  My first Vector is equivalent to the letter **a** and as you see in the CSS code - _see below_ - it has a value of **544**.
  
  ```
  #logo path:nth-child(1) { <br>
    stroke-dasharray: 544;
    stroke-dashoffset: 544;
    .
    .
    .
} 
```


Obviously your value will be different, so be careful to copy the console values exactly.
