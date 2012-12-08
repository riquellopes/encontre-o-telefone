function EncontreONumero(letra)
{
	var querty = {
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
		letra = (letra).toString();
		digi = new Array();


	for(j=0; j<letra.length; j++)
	{
		for( q in querty )
		{
			var reg = new RegExp("[".concat(q).concat("]"), 'ig');

				if( reg.test( letra[j] ) )
					digi.push(querty[q]);
		} //for

	}//for

	return digi.join("");
	
}