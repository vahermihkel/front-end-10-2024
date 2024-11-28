import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link, useNavigate} from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { CartSumContext } from '../store/CartSumContext';
import { AuthContext } from '../store/AuthContext';
import { useSelector } from 'react-redux';

function Navigationbar(props) {
    const { t, i18n } = useTranslation();
    // const [cartSum, setCartSum] = useState(100);
    // return <h1>{t('Welcome to React')}</h1>
    const {cartSum} = useContext(CartSumContext);
    const {loggedIn, setLoggedIn} = useContext(AuthContext);
    const {user} = useContext(AuthContext);
    const count = useSelector(state => state.counter.value)
    const navigate = useNavigate();

    function changeLang(newLang) {
        i18n.changeLanguage(newLang);
        localStorage.setItem("language", newLang);
    }

    function logout() {
        setLoggedIn(false);
        sessionStorage.removeItem("token");
        navigate("/");
    }

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            {/* <div>{JSON.stringify(user)}</div> */}
            <Container>
                <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/shops">{t("nav.contact")}</Nav.Link>
                        <Nav.Link as={Link} to="/shops">{t("nav.shops")}</Nav.Link>
                        <Nav.Link as={Link} to="/cart">{t("nav.cart")}</Nav.Link>
                        {loggedIn && 
                        <NavDropdown title="Admin" id="collapsible-nav-dropdown">
                            <NavDropdown.Item  as={Link} to="/admin">admin</NavDropdown.Item>
                            <NavDropdown.Item  as={Link} to="/admin/add-product">admin/add-product</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item  as={Link} to="/admin/maintain-products">/admin/maintain-products</NavDropdown.Item>
                            <NavDropdown.Item  as={Link} to="/admin/maintain-shops">/admin/maintain-shops</NavDropdown.Item>
                            <NavDropdown.Item  as={Link} to="/admin/maintain-categories">/admin/maintain-categories</NavDropdown.Item>
                            <NavDropdown.Item  as={Link} to="/admin/supplier">/admin/supplier</NavDropdown.Item>
                        </NavDropdown>}
                    </Nav>
                    <Nav>
                        <div>{count} pcs</div>
                        <div style={{margin: "7px"}}>{cartSum.toFixed(2)}€ </div>
                        {!loggedIn && <Nav.Link as={Link} to="/login">login</Nav.Link>}
                        {!loggedIn && <Nav.Link as={Link} to="/signup">signup</Nav.Link>}
                        {user && <div style={{margin: "7px"}}>Hello, {user.displayName}</div>}
                        {user && <img style={{width: "70px"}} src={user.photoUrl} alt="" />}
                        {loggedIn && <Nav.Link onClick={logout}>logout</Nav.Link>}
                        {loggedIn && <Nav.Link as={Link} to="/profile">Profile</Nav.Link>}
                        <button onClick={() => changeLang("en")}>English</button>
                        <button onClick={() => changeLang("ee")}>Eesti</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigationbar;