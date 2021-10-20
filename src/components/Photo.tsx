import React from 'react'
import { FcLikePlaceholder, FcLike } from 'react-icons/fc'
import { BsTrash } from 'react-icons/bs'
import styles from './Photo.module.css'

type PhotoProps = {
    id: string;
    regular: string;
    alt_description: string;
    liked_by_user: boolean;
    name: string;
    portfolio_url: string;
    medium: string;
    isLikedFilterOn: boolean;
    handleLike: (id: string) => void;
    handleDelete: (id: string) => void;
}

const Photo = ({ id, regular, alt_description, liked_by_user, name, portfolio_url, medium, isLikedFilterOn, handleLike, handleDelete }: PhotoProps) => {
    return (
        <article className={styles.photo}>
            <img src={regular} alt={alt_description} />
            <button onClick={() => handleLike(id)} className={`${styles.btnIcon} +' ' + ${styles.like}`}>
                {liked_by_user ? <FcLike style={{ fontSize: "2rem" }} /> : <FcLikePlaceholder style={{ fontSize: "2rem" }} />}
            </button>
            <div className={styles.photoInfo}>
                <div>
                    <h4>{name}</h4>
                    <a href={portfolio_url}>
                        <img src={medium} alt={name} className={styles.userImg} />
                    </a>
                </div>

                {!isLikedFilterOn &&
                    <button onClick={() => handleDelete(id)} className={styles.btnIcon}>
                        <BsTrash style={{ fontSize: "2rem", color: 'white' }} />
                    </button>
                }

            </div>
        </article>
    )
}

export default Photo;
