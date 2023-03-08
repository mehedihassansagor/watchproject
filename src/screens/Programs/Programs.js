import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "../../screens/Home/Hero/Hero.module.sass";
import Image from "../../components/Image";
import ScrollButton from "../../components/ScrollButton";
import ScrollParallax from "../../components/ScrollParallax";

const Programs = ({scrollToRef}) => {
  return (
    <>
      <div className={styles.hero}>
      <div className={cn("container", styles.container)}>
        <ScrollParallax className={styles.wrap}>
          <div className={cn("stage", styles.stage)}>
            Train smarter. get stronger
          </div>
          <h1 className={cn("h1", styles.title)}>
            ZEUS
          </h1>
          <div className={styles.text}>
            Track your workouts, get better results, and be the bestversion of
            you. Less thinking, more lifting.
          </div>
          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to="/download">
              Learn more
            </Link>
            <Link
              className={cn("button-stroke", styles.button)}
              to="/class02-details"
            >
              Download The App
            </Link>
          </div>
        </ScrollParallax>
        <ScrollButton
          onScroll={() =>
            scrollToRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className={styles.scroll}
        />
        <div className={styles.gallery}>
          <ScrollParallax className={styles.preview} animateIn="fadeInUp">
            <Image
              srcSet="/images/content/watch@2x.png 2x"
              srcSetDark="/images/content/watch-dark@2x.png 2x"
              src="/images/content/watch.png"
              srcDark="/images/content/watch-dark.png"
              alt="Watch"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={900}
          >
            <img
              srcSet="/images/content/ball@2x.png 2x"
              src="/images/content/ball.png"
              alt="Ball"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={600}
          >
            <img
              srcSet="/images/content/bottle@2x.png 2x"
              src="/images/content/bottle.png"
              alt="Bottle"
            />
          </ScrollParallax>
          <ScrollParallax
            className={styles.preview}
            animateIn="fadeInUp"
            delay={1200}
          >
            <img
              srcSet="/images/content/ball-black@2x.png 2x"
              src="/images/content/ball-black.png"
              alt="Ball black"
            />
          </ScrollParallax>
        </div>
      </div>
    </div>
      {/* 1ST PAGE  end*/}

      {/* 1 no div */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className="ps-5 ms-3">
              <h1 className = "px-5">Example Title</h1>
              <p className="p-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                magna at risus condimentum tristique. Nunc et hendrerit sem.
                Curabitur euismod finibus ante, in pharetra risus egestas sit
                amet.
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
              srcSet="/images/content/apple@2x.png"
              src="/images/content/apple@2x.png"
              alt="phone"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      {/* 2 no div */}

      <div className="container-fluid py-3">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
                srcSet="/images/content/avatar-4.png"
              src="/images/content/avatar-4.png"
              alt="phone"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div className="ps-5 ms-3">
              <h1 className = "px-5">Example Title</h1>
              <p className="p-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                magna at risus condimentum tristique. Nunc et hendrerit sem.
                Curabitur euismod finibus ante, in pharetra risus egestas sit
                amet.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 1 no div */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className="ps-5 ms-3">
              <h1 className = "px-5">Example Title</h1>
              <p className="p-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
                magna at risus condimentum tristique. Nunc et hendrerit sem.
                Curabitur euismod finibus ante, in pharetra risus egestas sit
                amet.
              </p>
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <img
                srcSet="/images/content/ball-black@2x.png"
              src="/images/content/ball-black@2x.png"
              alt="example"
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Programs;
