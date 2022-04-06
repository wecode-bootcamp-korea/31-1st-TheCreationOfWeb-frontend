import React from 'react';

const Aside = () => {
<<<<<<< HEAD
  return <div>Aside</div>;
=======
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
    setIsOpenSubMenu(false);
  };

  return (
    <section className="aside">
      <div className="asideTitle" onClick={goToHome}>
        <img className="titleLogo" alt="logo" src="/images/logo.png" />
        <h3 className="titleName">프 룯 츠</h3>
      </div>
      <MenuList
        setIsOpenSubMenu={setIsOpenSubMenu}
        isOpenSubMenu={isOpenSubMenu}
      />
    </section>
  );
>>>>>>> main
};

export default Aside;
