interface AnimalTabProps{
    animal: string,
    onClick: () => void
}

export const AnimalTab: React.FC<AnimalTabProps> = ({animal, onClick}) => {
    return (
        <button onClick={onClick}>{animal}</button>
    );
}