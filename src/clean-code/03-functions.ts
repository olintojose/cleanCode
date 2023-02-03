(() => {

    // función para obtener información de una película por Id
    function getMovieById(movieId: string) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getCastByMovie(idMovie: string) {
        console.log({ idMovie });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById(id: string) {
        console.log({ id });
    }


    // Crear una película
    interface Movie {
        cast: string[];
        description: string;
        rating: number;
        title: string;

    }
    function createMovie({ title, description, rating, cast }: Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function checkFullName(fullName: string) {
        console.log({ fullName });
        return true;
    }

    function createActor(fullName: string, birthdate: Date): boolean {

        // tarea asincrona para verificar nombre
        // ..
        // ..
        // if ( fullName === 'fernando' ) return false;
        if (checkFullName(fullName)) return false;
        console.log('Crear actor', birthdate);
        return true;

    }
    // const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
    //     let result;
    //     if ( isDead ) {
    //         result = 1500;
    //     } else {
    //         if ( isSeparated ) {
    //             result = 2500;
    //         } else {
    //             if ( isRetired ) {
    //                 result = 3000;
    //             } else {
    //                 result = 4000; 
    //             }
    //         }
    //     }

    //     return result;
    // }


    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

        if (isDead)   return 1500;

        if (isSeparated)  return 2500;
        
        return isRetired ? 3000 : 4000;

    }





})();
