import React , { useEffect , useState} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import {exerciseOptions, fetchData , youtubeOptions} from '../utils/fetchData' ;

import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail , setExerciseDetail] = useState({});
  const [exerciseVideos, setexerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
         const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com' ;
         const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com' ;

         const exercisesDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}` ,
         exerciseOptions );
         setExerciseDetail(exerciseVideosData);

         const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exercisesDetailData.name}`,
          youtubeOptions);
          setexerciseVideos(exerciseVideosData.contents)

         const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}
          /exercises/target/${exercisesDetailData.target}`, exerciseOptions);
          setTargetMuscleExercises(targetMuscleExercises);

          const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/
          exercises/equipment/${exercisesDetailData.target}`,exerciseOptions);
          setEquipmentExercises(equipmentExercises);
    }
    fetchExercisesData();
  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos = {exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} 
       equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail