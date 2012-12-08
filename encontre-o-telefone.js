function EncontreONumero(letra)
{
	if(/[a,b,c]/ig.test(letra))
		return 2;

	if(/[d,e,f]/ig.test(letra))
		return 3;

	if(/[g,h,i]/ig.test(letra))
		return 4;

	if(/[j,k,l]/ig.test(letra))
		return 5;

	if(/[m,n,o]/ig.test(letra))
		return 6;

	if(/[p,q,r,s]/ig.test(letra))
		return 7;

	if(/[t,u,v]/ig.test(letra))
		return 8;

	if(/[w,x,y,z]/ig.test(letra))
		return 9;
	return letra;
}