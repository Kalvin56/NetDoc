import {useParams} from 'react-router-dom';

function Medecin() {

  var slug = useParams().slug;
  var ville = useParams().ville;

  function SlugToString(Text)
  {
      return Text
          .replaceAll('-',' ');
  }

  function capitalizeTheFirstLetterOfEachWord(words) {
    var separateWord = words.toLowerCase().split(' ');
    for (var i = 0; i < separateWord.length; i++) {
       separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
       separateWord[i].substring(1);
    }
    return separateWord.join(' ');
  }

  if(slug){
    slug = capitalizeTheFirstLetterOfEachWord(SlugToString(slug));
  }

  if(ville){
    ville = capitalizeTheFirstLetterOfEachWord(SlugToString(ville));
  }

  return (
    <div className="background-white height-full-adapt">
      <div className="content">
        <h1>Medecin</h1>
        <p>Le médecin est : {slug} ville : {ville}</p>
      </div>
    </div>      
    );
  }

export default Medecin;