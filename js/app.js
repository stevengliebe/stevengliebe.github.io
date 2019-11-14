// Letter animation by Tobias Ahlin. MIT license.
// https://tobiasahlin.com/moving-letters/

// Animate heading.
var textWrapper = document.querySelector( 'h1 .letters' ); // Wrap every letter in a span
textWrapper.innerHTML = textWrapper.textContent.replace( /\S/g, '<span class="letter">$&</span>' );
anime.timeline( { loop: false } ).add( {
	targets: 'h1 .letter',
	scale: [ 0, 1 ],
	duration: 1500,
	elasticity: 600,
	delay: ( el, i ) => 120 * ( i + 1 )
} );

// Animate text.
var textWrapper = document.querySelector( '.text .letters' ); // Wrap every letter in a span
textWrapper.innerHTML = textWrapper.textContent.replace( /\S/g, '<span class="letter">$&</span>' );
anime.timeline( { loop: false } ).add( {
	targets: '.text .letter',
	scale: [ 0, 1 ],
	duration: 1500,
	elasticity: 600,
	delay: ( el, i ) => 18 * ( i + 1 )
} );

// Fade in Texas.
setTimeout( function() {
	document.getElementById( 'texas' ).className += ' show-texas';
}, 625 );

// Fade in logos.
setTimeout( function() {
	document.getElementById( 'logos' ).className += ' show-logos';
}, 1000 );
