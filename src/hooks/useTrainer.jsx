import { useEffect, useState } from "react";


const useTrainer = () => {
    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/trainer')
            .then(res => res.json())
            .then(data => {
                setTrainers(data);
                setLoading(false);
            });
    }, [])
    return [trainers, loading]
};

export default useTrainer;