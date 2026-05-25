//  Immediately Invoked Function Expression (IIFE)
//  An IIFE is a function that is executed immediately after it is defined. It is often used to create a new scope and avoid polluting the global namespace.

(function chai(){
    console.log("Chai is the best");
})();

// global scope kay pollution se bachne ke liye hum IIFE ka use karte hain. IIFE ke andar jo bhi variables ya functions define kiye jate hain wo global scope mein accessible nahi hote hain. Isse hum apne code ko modular aur organized bana sakte hain.

// IIFE ke andar hum apne code ko encapsulate kar sakte hain, jisse hum apne code ko better maintain kar sakte hain. IIFE ke andar hum apne code ko isolate kar sakte hain, jisse hum apne code ko better debug kar sakte hain. IIFE ke andar hum apne code ko better organize kar sakte hain, jisse hum apne code ko better read kar sakte hain.

((name)=>{
    console.log(`IIFE is the best and teaches by ${name}`);
})("Hitesh");