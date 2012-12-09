function EncontreONumero(letter)
{
	var keyboard = {
		  'a,b,c':2,
		  'd,e,f':3,
		  'g,h,i':4,
		  'j,k,l':5,
		  'm,n,o':6,
		  'p,q,r,s':7,
		  't,u,v':8,
		  'w,x,y,z':9,
		  '1':1,
		  '0':0,
		  '-':'-'
		},
		letter = (letter).toString();
		digit = new Array();


	for(j=0; j<letter.length; j++)
	{
		for( k in keyboard )
		{
			var reg = new RegExp("[".concat(k).concat("]"), 'ig');

				if( reg.test( letter[j] ) )
					digit.push(keyboard[k]);
		} //for

	}//for

	return digit.join("");

}