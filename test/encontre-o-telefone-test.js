describe("Para o numero 2", function(){
	it("a letra 'A'.", function(){
		expect(EncontreONumero('A')).toEqual('2');
	});
	
	it("a letra 'B'", function(){
		expect(EncontreONumero('B')).toEqual('2');
	});
	
	it("a letra 'C'", function(){
		expect(EncontreONumero('C')).toEqual('2');
	});
	
});

describe("Para o numero 3", function(){
	it("a letra 'D'", function(){
		expect(EncontreONumero('D')).toEqual('3');
	});

	it("a letra 'E'", function(){
		expect(EncontreONumero('E')).toEqual('3');
	});

	it("a letra 'F'", function(){
		expect(EncontreONumero('F')).toEqual('3');
	});

});

describe("Para o numero 4", function(){
	it("a letra 'G'", function(){
		expect(EncontreONumero('G')).toEqual('4');
	});

	it("a letra 'H'", function(){
		expect(EncontreONumero('H')).toEqual('4');
	});

	it("a letra 'I'", function(){
		expect(EncontreONumero('I')).toEqual('4');
	});
	
});

describe("Para o numero 5", function(){
	it("a letra 'J'", function(){
		expect(EncontreONumero('J')).toEqual('5');
	});

	it("a letra 'K'", function(){
		expect(EncontreONumero('K')).toEqual('5');
	});

	it("a letra 'L'", function(){
		expect(EncontreONumero('L')).toEqual('5');
	});
	
});

describe("Para o numero 6", function(){
	it("a letra 'M'", function(){
		expect(EncontreONumero('M')).toEqual('6');
	});

	it("a letra 'N'", function(){
		expect(EncontreONumero('N')).toEqual('6');
	});

	it("a letra 'O'", function(){
		expect(EncontreONumero('O')).toEqual('6');
	});
	
});

describe("Para o numero 7", function(){
	it("a letra 'P'", function(){
		expect(EncontreONumero('P')).toEqual('7');
	});

	it("a letra 'Q'", function(){
		expect(EncontreONumero('Q')).toEqual('7');
	});

	it("a letra 'R'", function(){
		expect(EncontreONumero('R')).toEqual('7');
	});
	
	it("a letra 'S'", function(){
		expect(EncontreONumero('S')).toEqual('7');
	});

});

describe("Para o numero 9", function(){
	it("a letra 'T'", function(){
		expect(EncontreONumero('T')).toEqual('8');
	});

	it("a letra 'U'", function(){
		expect(EncontreONumero('U')).toEqual('8');
	});

	it("a letra 'V'", function(){
		expect(EncontreONumero('V')).toEqual('8');
	});
	

});

describe("Para o numero 9", function(){
	it("a letra 'W'", function(){
		expect(EncontreONumero('W')).toEqual('9');
	});

	it("a letra 'X'", function(){
		expect(EncontreONumero('X')).toEqual('9');
	});

	it("a letra 'Y'", function(){
		expect(EncontreONumero('Y')).toEqual('9');
	});
	
	it("a letra 'Z'", function(){
		expect(EncontreONumero('Z')).toEqual('9');
	});

});

describe("Nao associados", function(){
	it("numero 1 retorna '1'", function(){
		expect(EncontreONumero(1)).toEqual('1');
	});

	it("simbolo retorna '-'", function(){
		expect(EncontreONumero('-')).toEqual('-');
	});

	it("numero 0 retorna '0'", function(){
		expect(EncontreONumero(0)).toEqual('0');
	});
});


//Segunda etapa dos tests::
describe("Digitando palavras", function(){
	it("amor deve retorna 2667", function(){
		expect(EncontreONumero('AMOR')).toEqual('2667');
	});

	it("1-HOME-SWEET-HOME deve retorna 1-4663-79338-4663 ", function(){
		expect(EncontreONumero('1-HOME-SWEET-HOME')).toEqual('1-4663-79338-4663');
	});

	it("MY-MISERABLE-JOB deve retorna 169-647372253-562", function(){
		expect(EncontreONumero('MY-MISERABLE-JOB')).toEqual('69-647372253-562');
	});
})
