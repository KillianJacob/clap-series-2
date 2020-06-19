class Combo {

    Combos = [
        //Flush,
        //Full,
        Brelan,
        Pair
    ]

    getCombo(cards){

        for(let i = 0; i < this.Combos.length; i++) {

            if(this.Combos[i].checkCombo(cards)){

                return new this.Combos[i](cards);

            }

        }


    }

    static getTotalValue(cards) {

        let total_value = 0;
    
        cards = orderCards(cards);
    
        var TypeValue = {
            '2': '02',
            '3': '03',
            '4': '04',
            '5': '05',
            '6': '06',
            '7': '07',
            '8': '08',
            '9': '09',
            '10': '10',
            'J': '11',
            'Q': '12',
            'K': '13',
            'A': '14',		
        };
        
        var symbole = {
            'd' : 1,
            'c' : 2,
            'h' : 3,
            's' : 4,	
        }
    
        for (let i = 0; i < cards.length; i++) {
        
            var c = cards[i];
    
            var value = null;
            var type = null;
    
            if(c.length == 3){
        
                value = c.substring(0, 2);
                type = c.charAt(2);
            
            }
            else{
        
                value = c.charAt(0);
                type = c.charAt(1);
                
            }
            total_value = total_value + (TypeValue[value]);
            
    
    }
    return total_value;
    
    }

  }