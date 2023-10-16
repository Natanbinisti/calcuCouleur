const ecran = document.querySelector('.ecran')
let operation  = ecran.value;
const boutonUn = document.querySelector('.un')
const boutonDeux = document.querySelector('.deux')
const boutonTrois = document.querySelector('.trois')
const boutonQuatre = document.querySelector('.quatre')
const boutonCinq = document.querySelector('.cinq')
const boutonSix = document.querySelector('.six')
const boutonSept = document.querySelector('.sept')
const boutonHuit = document.querySelector('.huit')
const boutonNeuf = document.querySelector('.neuf')
const boutonZero = document.querySelector('.zero')
const boutonPlus = document.querySelector('.plus')
const boutonMoins = document.querySelector('.moins')
const boutonX = document.querySelector('.multiplie')
const boutonDivision = document.querySelector('.divise')
const boutonPoint = document.querySelector('.point')
const boutonEffacer = document.querySelector('.effacer')


boutonUn.addEventListener('click', ()=>{

        addToDisplay(boutonUn.innerHTML)

} )

boutonDeux.addEventListener('click', ()=>{

    addToDisplay(boutonDeux.innerHTML)

} )
boutonTrois.addEventListener('click', ()=>{addToDisplay(boutonTrois.innerHTML)} )
boutonQuatre.addEventListener('click', ()=>{addToDisplay(boutonQuatre.innerHTML)} )
boutonCinq.addEventListener('click', ()=>{addToDisplay(boutonCinq.innerHTML)} )
boutonSix.addEventListener('click', ()=>{addToDisplay(boutonSix.innerHTML)} )
boutonSept.addEventListener('click', ()=>{addToDisplay(boutonSept.innerHTML)} )
boutonHuit.addEventListener('click', ()=>{addToDisplay(boutonHuit.innerHTML)} )
boutonNeuf.addEventListener('click', ()=>{addToDisplay(boutonNeuf.innerHTML)} )
boutonZero.addEventListener('click', ()=>{addToDisplay(boutonZero.innerHTML)} )
boutonPoint.addEventListener('click', ()=>{addToDisplay(boutonPoint.innerHTML)} )
boutonPlus.addEventListener('click', ()=>{addToDisplay(boutonPlus.innerHTML)} )
boutonMoins.addEventListener('click', ()=>{addToDisplay(boutonMoins.innerHTML)} )
boutonX.addEventListener('click', ()=>{addToDisplay(boutonX.innerHTML)} )
boutonDivision.addEventListener('click', ()=>{addToDisplay(boutonDivision.innerHTML)} )
boutonEffacer.addEventListener('click' , ()=>{
    effacer()
})



// implementer les regles concernant les symboles

function addToDisplay(valeurDuBouton)
    {
        let valeur = valeurDuBouton
            //  operation = "1+2+5"

      //  let lastChar = operation[operation.length-1]
        let lastChar = operation.slice(-1)
        let symbols = "+-/*."

      let lastCharIsSymbol =  symbols.includes(lastChar)
      let valeurIsSymbol =  symbols.includes(valeur)
                                 //  AND
        if(lastCharIsSymbol && valeurIsSymbol){
                   return
        }

        if(operation == 0){
            operation = valeur
        }else{
            operation = operation + valeur
        }




        console.log("operation :" +operation)

        ecran.value = operation
    }

    function effacer(){
        ecran.value=0
        operation = '0'
    }

    function calcul(){


    }


let bolognaise = 'à la sauce bolognaise'

function faisDesPates(sauce){

    console.log('voici un plat de pates ' + sauce )
}

// faisDesPates(bolognaise)




//en soi, dans un code couleur,
//il y a un #
//et ensuite 6 caracteres parmis ceux-la
let caracteresPossibles = "abcdef0123456789"