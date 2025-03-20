import {Component} from "react";
import DiscoverOurStory from "../../../image/about11.jpg";
import Pic1 from "../../../image/ourMenuImg/download (3).jpeg";
import Pic3 from "../../../image/ourMenuImg/Beafourtony Espresso Cups and Saucers Unique craft Ceramic Cup.png";
import Pic2 from "../../../image/ourMenuImg/download (2).jpeg";
import Pic4 from "../../../image/ourMenuImg/Free PSD _ Mockup of a cup of takeaway coffee.png";

export class About extends Component {
    render() {
        return (
            <>

                {/*//home photo*/}
                <div id="AboutHomePic">
                    <div className={"flex text-white   font-bold  justify-center items-center flex-col pt-[50px]"}>
                        <h1 className={"text-[40px] "}>The Best Coffe tast Experiance </h1>
                        <h1 className={"text-[62px] "}>About Us</h1>

                    </div>
                </div>


                {/* //second eke podi kalu patiya
                <div className="bg-black bg-opacity-90   py-16 flex  justify-around items-center">

                    <div className={"flex gap-5 items-center justify-center "}>
                        <img className="w-[30px] h-[30px] "
                             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACwUlEQVR4nO2Zy2sUQRCHf3G7JgmiF8UnCuLJx1EkRxG9KV5EQSEIPv4EwZNH8aaejP+Bgd2qSWJCJBANBCEeNIIvFBTBkzFBMclWr9DSG9FFsuz2LjPpYD7o48B8VHVNVQ2wxhorRzlNTinTlDJ9V6anNjU9WE24PpAK3bVCrvao0Nz8YPdOrAacYIMKDf8rUSPzALEzL907LJuX9SRqZHoRKy7FVivmbSOJqgjTrCtiO2LD9SNRoclmJP4cNiliw6bmWpDE3xQ7j5iwYj62KDLjhrANsaBMP1oR+Z1iRcSCZfOuZZGly38WMWDZFNsRsWzeIAYs05W2IiK0gBhwRWxRoZ9tpNYTxIIKjbURkd6oOl3bkoh57q5jHWLBOXRYNtOhIpW0cByxoSU6ExiNAcSIc+hQoYmAS34RsaIpHVAh26TI7GKpcy9iRYVuBqTXMzeK9YgRN4xO/4IB5XfMP4MYKUuyX5nmAyLDbhwGMaJCl4OqGJt7vmAgRnSZbUqDAnALEa+GHgXK3I4yMm5pMfE+OM36UUBsLAx07bZiPgXKiBtHF2JDi3RQhb4GpZnQ6HLfGR8tZbrgV7HKVLFsXvsWKTcZWzKH/S44MDLTtR1AJS0crfedUqFBvyjMRaYihWPKVA4sALO+N1OmoSaiOKNM5/Lc1AfJBB82kstGs8KFI8FpFnhUaM7vFDKXsWIOKdOXTCMj1dQcWeCuXZm3/pbN58xlhOZ8sclUZjHt3BP80WwtMlPIaa00kbHIt8xFqjL9SKxQX4bpNYk8UaZLYfMMNXUqpcIJ5E25lOwLmTRt42jcwUrhR2BlutHsQsPWvxsjUUyg1e0M0+PWRMwLN4yNiAU/bJUlOR2WbuaVn4cQI1UhTk4q08NqCy9178SEG8BmrAZcCZt8V2zF3Pc/jJZ+A5oPls1VP2av9Put8d/yC+WRhlhgFvr1AAAAAElFTkSuQmCC"/>
                        <h1 className="text-white  ">+9470 110 26 33</h1>
                    </div>

                    <div className={"flex gap-5 items-center justify-center"}>
                        <img className="w-[30px] h-[30px] "
                             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADcUlEQVR4nO2Zz2sTQRTHn+a9lSi1/kLUevYX3vQmLXoVxGpRvHjpVRCEqkc9SPWggiLSXjx4TEnepC0Fbav4F9SDxXpRaj2Iv9Bq6s5UOzLJtgRNurOb/RGkXxgIZN9mPvN+zUwAVvSfyxXObsV4WQoaU4wvJdMPM7zPo4rxkltwdkGzSgk8KJnGlSBtMyqgdACaRbofSDLdk0wLthBLMEwLUtBd/RQwXYhh2CiZngQFqOUdzbAhTU9Yh5KFd57pHDiJg5hwigqiCuZOGokdOCdsckYlWQCiDKkaMKOJQLiDzp64IJQ3EukzptnZTQjfuux0aQEtZrjsdCrGKUvbi7GDlLuzBYTOwaZa5dp8ZxFej2MHUQJf+YYGO111F6LonPJdCMap2EEk06zfREwo1bPXI7DewiOz8YMImmsIJAetviCC5mIHUYzvLEKrs569LNBpmxyDuGW1t2KcMon9t60uwGYlcMbCI2NJgNy2Lb8msU1OmFHxhD+EqoDcjB3EZeeYHUj4Mc+Zo7GD6EewTjK5cUFIQXN6ENZCElKMhdg8wpiDpOQWnZNxgbhF53iihyrFOB09CM6Yd0OSUow9MYBcgKRVLqmCvkaW5EzfTNeHNCSZbkVYrW5AWiqJ7A7JVIoA4rsehm2QpiTTtQjC6iqkLS2gRTK9b8AbH0y+QTNICTzfQKU6B80inQNHMU4GhmB8EXvf0BpWKcbXy01knjOHF59XjO1B7rrMs/Mic2TJvoiHlrVnnDZzCgxiJma1olUX0ErgwwDeeLC0aDnIKIHPLWzaA4NIQX3eyvXa2ug8bJWCPlt446MehC3Wc2Hq9QpDX+CYl4I+lY3ztD+IrWQ6a1GpzgR5p1tw9noL8EWPwBp7Q3OZVqkoExD1Np+xGOqdAicC744V44D3oz1hflTnYXutECuHVMgOrhY3qYwDQTaDc1LQ71I+uxNCyhXOiSjPGiWzHRL0SzL9tPpTSArq9lZvHBqUEtRflRf3o/oXQArqjvZhH5mzd7lRMk5GcQ6XtotcGsq2mZAquy+is4GpOGZE8S6dg1Yzt3LYD2Xb6j5orvMDJVQKUjaFaLG7LnflmbZcv9bgCmdfqKaTsLRfs5ZM170K0w9NLuVVw3+2T+WdrsA34c8UKQ3GaX0FVlcRYkfqkwo9sCOFoFgR+OkPQBhKYHyKxwoAAAAASUVORK5CYII="/>
                        <h1 className="text-white max-w-[250px] text-start pl-3">No 3/6 , bandaranayaka road ,
                            hettiwidiya , weligama</h1>
                    </div>

                    <div className={"flex gap-5 items-center justify-center"}>
                        <img className="w-[30px] h-[30px] "
                             src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFfElEQVR4nO1bW4scRRQumHM6rrfgDbw9ary+qcQ3QcW7UaOioD9g8+blJUFBXYOEqIFoEDeb+OCTjmyf6k0ICInr5c2g+AeyiRohWfcSYxa7aqIlZ3Ym2Z2d6q6erpqd0fmgYejprnPpU+ecOnVKiAEGGGCAgDCTArSE9ZrgVS1hTEn8VhNMKcI5JVEriYp/N+59owl2awkv6wm4y1RFRfQjTFVEqYye0gSxIjytJZpOLiXxlCb4IpXRBjMqUPQ6TFVcpQi3KokznQqdoYxpRfimqYrLRa/BVMXFSuI2RXjGt+ArFEF4WkkcMRPiQtELSCl6Ukv4JbTgKy84Wosrj62a4GZSXKAId3Zf8BWK+NRUxVBXhV8YH7peS/ip4ByeVxIPKsIPtYThNoIM83+K8BA/W3BaHDbj4pquCJ9ORDdrCccchZ7l0FejyoOtXrz12aX/8bO1pPKQlrBncQwHRRBMpfuiG4MLryROOwg+oyVsZudoGytLAUvBY+gEtrhEFkV44q9kzQ3hzJ7g5xzB/1aE240Ul+SN56qAJnhMJfE9ppHjE46Y/eJqb4I3HV7unCc4Xksq94rAqFHlPqaVYwnfczLmjaiWOJo7B2PY5I1gHj8xbHKYDju9EEs5pXXzxDUl8XkRGEyDaTnw80+NKo+UImbYARVIcpixlKKnRSDw2C7CL40MpXIEJXFb1pxnU1zGEMFvaRytE4HAYzONpQqvT4cMn6AI3+qImInFFUrinzZvz86ozpSMnqmbP+GJNI5uEYHBsZ4FVhLPKokv8D0dwz226MBrB7NfXFaYkCLcmqHV7cuYSqKNRb980TC4jF4crWOaLfy+nxEa3yi8nleWxIPvu8T5kAqw8LzWljUqiScL1RPSJNqYoc3NwgN8K2BxTHjdxnehlaMmiC2anM1Kb1dbAfVskctr7T/cZ26DTApQhH9YPP9u4QkhFFAfl2Cv5ePNO9UYdQJ3Z5jRA72ugFpcedgeuvGOfMaIq7dtPf+cz8JkKAU0HPgpiwW/5MAY7LGY0EFfTIZUAENJnLTI8LHLy99ZXv6gbxRAuMsiw6QDY3DU4kWH+0UB7UtudRmO5L6sHEtQ5ZkMO57FAqZzB1IS1WooQBE+53M8iyNPe0gB8GsLc7UySvCpgJluKIA3VFrX9mWU4KiA33vGCTJYWJ9KyHWCBFM9EwabaNYTWmidVTG+KPyHwa9zX9YSxizmc0gEgm8llEqEtIRXLC/Ph9yj9zUdfKTC621OhLerRED4sISarDxaajFkspbDEsZEYJRVgib4xGrBri03mmA8dEGko+kwjreXKIh87mczJIEtPoQsbgn5hc2sklhK0eP+iqIHxKWiC2haAvcGOfC81vb1eQ1Q2IErwretGZXEd8uWxZ35SPA2x7L4Diu/DgrseGNEJdGz5zZGZHSr6ObGSMMx1mTl/oyNkTNmQlzZETFF+E6fbI2du9fmY410TNB8KS7Ka4r4T2+OMtIkeqIft8f54qTIF9GP+q5BwufizXCLDMGPOeZ2nJ2RCAymkTXnG9Z42BwQa7wSXtg3dJ29VnA+OvAurUue0PquY5zfwZ0fufM+VM9gKqObeKfVsT/wtaxdZFcF8Bic4dlT3GV0T4aMQudDUY4lLDFFPgewl7erWru2shTAz3J/Dy9sXARvfvngwjexIIeu1QQ/FO39V4RfLVZrrK2yuxrPWFajPdAq2wQ7md5olsZR7w6vCHiV5do77PUimPIW58uCDy80Toq0XTsEOTDR7Rb5AguoEa6//6+OzFgOTW3QBNWivf8tX3uOKzk8zfri0FQ7cB2Oj8DVj8JJHOXaPO/Scq5QPzK3eM027nE5e5Srt1rCnX17bG6AAQYQ/YJ/AZ6e3SDg8lfyAAAAAElFTkSuQmCC"/>
                        <h1 className="text-white pr-28">open every days</h1>
                    </div>


                </div> */}


                //kahapata kotasa
                <div className="bg-white  ">

                    <div className=" gap-2 p-5 flex justify-around items-center py-28 ">
                        <div className="flex-col justify-center gap-5 items-center  flex ">
                            <img
                                src="data:image/png;base64,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"/>
                            <h1 className="text-center ">24 HOUR SERVICE</h1>
                            <p className="text-center  max-w-[400px] ">Even the all-powerful Pointing has no
                                control <br/>
                                about the blind texts it is an almost<br/>
                                unorthographic.</p>
                        </div>
                        <div className="flex-col justify-center gap-5 items-center  flex">
                            {/* <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACMklEQVR4nO2Zz2oTURTGD1p1ZZXEhPt9M0lgyCrbbPUJBG0MPoToXt/AjeIDuBLduvYF/LfQurKtdtUWkUJ3FRQUR46cyhA6MzYzaWeG+8Hd3Jycb373nJu5l4h4eXl5eXkVEMn4mMcugIfD4fBc3UFiHQAeNAKE5G5TQGKpouhBShKb0lqsAEhO3FeSz8IwHJYKXuYiHDHPfhAEV2sHIibn3IDkc50D8APAlYU8zKJBTKcBPDGYL865jtQURLVE8qV9/kJETkkRnSCIkOwB2LPK3KstiEo3PMnfJH8CuCw1bK1/0tOzVWUHwKXagozH4zMA3lrsU/lfVQ1E1e12IwDftc0AjKWuICqSjyz+cWVbi+Q1yZFWQmMBbFYZJD7C+NUUkNiD0FeEvrXo9wib+av1EcD1drt9XgeAFZLriwABsO2cmya8JgA2ygBZi6LowuybVeeKwBwGAmA7DMPWrJfO6Wk3NZdeHfMMtRIZx4RJmSDOuWmaVxAEN1NybWmS+3mGWt605K1Wa7lMkPYcXn9vi6PR6KzCZFUmK7m117GARDNe2oYA7ube3wG8ti+spMU4525YzCspoITXJMNrOpcXgDtGv37YZh8MBhcBfLKYW1JAJG/bQ25kbPbPc3lp2wH4cGCgq6V9qkMrkYB4r7FFQMxr1bx2dGMnvKYJiHdzefV6PR7ApGy01U6n46QE9ft9ZHnpghXy0v/7tM3swv9NB4A32g5FK3GSXl5eXlI//QFNxRii1nWsDQAAAABJRU5ErkJggg=="/> */}
                            <h1 className="text-center ">FRESH ITEMS</h1>
                            <p className="text-center  max-w-[400px] ">Even the all-powerful Pointing has no
                                control <br/>
                                about the blind texts it is an almost<br/>
                                unorthographic.</p>
                        </div>
                        <div className="flex-col justify-center gap-5 items-center  flex">
                            {/* <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAG30lEQVR4nO1aeYiVVRT/XDLba6aZd3+/+56Ppgl0IrGmKNsjop1sISPKwjIKIsEiyszMNiTIpoUKI8Miy9LMqCxKyaKibJEaWzFzI0PNPXV0jDOeT56v977lft+8eSMduH+85Z577u+ee7Z7PO9/6nrKZDL1AG4iOR3AbyQ3ktwOYBmAWSSHNzY27uvtbVRfX98AYDKALSR3Bg0ASwGc4+0N1NzcvA+A8VE2XjS2k7zO685krc0C+CLmxgs1YRuAZq87UiaTORrAEodNby36/KHX3SiXyx1J8k/Hk59Z/J219iSvu1C/fv0OA/Cr4+a3G2OuLfH9WK+bUA+SMxLc+bdJDi3x2wdedyBjzDWum1erP4jkxBLAfOtVO9XV1R0IYEUCAO5oamrqQ/KPEgD84lU7kbzdceNtsnnlMarMf772qpx6xnV56u7esNYOFAYATgPwT5n/vupVMxljzogY1LwO4FaSgzOZzAEF8y8HsDZg/r2V3lNPERLAaJJTSL5H8l2Sz4tLAnBuPp/vW3T/x5HcEODbc8VryKmTfDMCeJWJBpuamvoAGFnKEJUQarNkdHL6/vz6+voMgBeL/nufuEcZuuGJAOaSXB/xuizW+Z1LAI4j2epoyL6Szfm8SF5Fch3JSfLZGDOA5CeOvDs/CLLWXqh5+c4Eox3AC9lstsZPf2traw8ieTKAv114AljT0NBwSKduHgHW13EskoCmgP+sBLzuqUTcvizFzftjk7X2ClmjpqbmYACfOfCYL7WETgUAwDMB6uektkWh7VBZJ5/PHxrTvmwC0L8SJaptAQC8lYImtImP99cj+VcU4Hzt6VQiOSFg81sB3J3GdRD7Ih5G1jTGnCfGMsSQ3tDpm/d2+eSlAUIvL5OXu47ffe9A8vFyal+RkxfKZrPHhJzaAmvtWSkC0HGldO39BJCi31t9LakIAbgxRODFEqs7VHLDQLhU1x+i30mwNFYiUK+SxBJFh2JDpLn5+ykDsETyBpXhevEOXlcQgNciCDyY5EVpAqAgjIsjq4AE4BIJiki+DGCaJlCTxFBrwbRXXAA+iiDoU1rj+zJlANZIcBQkn2iflNdEziBXXahZUpApzFDDAJgTgekqjeL6B6S5rmNUwCvSbeKFHPlKsHVsKACMfrefkP8bYy6LchIxxsJimay1Z8r3KfCWwzo7DIBXYtTpT1cQzk9LEyTQkmczFac3gAdJ7kgR4HXGmKagK/BoDGHXGmOO13n9EmZ3HZGhGFfhp1cs1B45jvlljSPJ4TGFXi2WuEBdB4qRVD8eRyjpAxgiPOrq6ozU+xMAuQLAVDWUe7wn+sNaOyyo+rPTYUwRLfD5iE8neXPUirAYOD8NJ/mDowyzxUXrlZwfst435W5BL4fT232K8vylDQw9hZlUbaT5IQw8+a+4KpLzHNZdL1qoBdhpUedZa48qdw1muqpfwVik2VtH0RLAnWVO4me/DB5UgwgYK1Vra0l+H2cugBElAbDWDksBAH+RudL7oxt8oOj3dt+TaO2xPa7GiYuUviGXwqoGdP8lUdsUCqF7nLIxJq/1/t1dIVIolfWMMXWOPQMPqcaOcZRtRjk74OlDRyoA6GYXaLo7SC3+Zt/fSxzvwHOD5ALiMaRe4ChT+Q4Ta+1AB5UMW/Bp3bBY6xa9Fv3VeDqpb4KH1/DeApLT0wRA6oDZbLYRwNXSKqNrvOTI62Kd/2mCA5kcCIAxZkC5QCLBoh2ZpPAXMFxOX4aovmakri472tsCgPEpA7DMByCB8drhh8sJ5bkyFIB8Pt9XrHiKILT7T1rS3ODIo00PZ/8ksmQymSNCARACcGqKKW+r8BS3mMDIdgCgXsVVE7/z4hCAEWkAAOBZ4Setrgn47EhBA+RpPh6RbEkBgJFlosI4PFYLD40BXHi0S7dqbAA8z+udwG11DKkgKQBTE/D5uCB8dgFwlpeAeiTUhMEKwOcJNGC0auQjjodwgpeUANylbWxxhT9F57sWPGTNnKbOKx3Wf8dLi6y1J8Z1kZK9KQCurfJPynyStzhsfktgPdCF1BJPiFoU9W2AY82h4yFVI8iojVSV6SoBcLikp/JmECLEGAXg4Zint0obqmqlnOVw+nNivxI5Ui9teZugjywLVTs2Sn2wwIDFeVprlfKVRG4kf3Q4+cWaO1QP5XcZsTA1FtDuV+0a4/L2IDGDaI5XjcQyDRH6PjBbPI30Aoe0ygZem0jPYV1FuVyOCdPZoM3/VLUnH7Mhw2XMCHtlrioC8FhKG1+vr8ud3z+cNqmRc6oO6bznqs7Su0SWMV+GpJTeknp019WkLz2S6MzThog27U9crg8gLdbaCyQ77WpZvb2F/gVxweE8H0dwugAAAABJRU5ErkJggg=="/> */}
                            <h1 className="text-center ">FAST DELIVERY</h1>
                            <p className="text-center  max-w-[400px] ">Even the all-powerful Pointing has no
                                control <br/>
                                about the blind texts it is an almost<br/>
                                unorthographic.</p>
                        </div>
                        <div className="flex-col justify-center gap-5 items-center  flex">
                            {/* <img
                                src="data:image/png;base64,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"/> */}
                            <h1 className="text-center ">FRENDLY STARFF</h1>
                            <p className="text-center  max-w-[400px] ">Even the all-powerful Pointing has no
                                control <br/>
                                about the blind texts it is an almost<br/>
                                unorthographic.</p>
                        </div>
                    </div>
                </div>


                {/*// our story eke thiyn photo eki text eki*/}
                <div
                    className="flex justify-center items-center mx-auto bg-gradient-to-r from-[#535353] to-green-500 p-10">
                    <div className="flex justify-center items-center bg-neutral-900">
                        <img className="w-[550px]" src={DiscoverOurStory} alt=""/>
                    </div>

                    <div
                        className="flex flex-col justify-center items-start bg-neutral-900 bg-opacity-50 ms-[-100px] p-10 rounded-xl">
                        
                        <h1 className="text-4xl text-center text-white pb-1">OUR STORY</h1>
                        <p className="text-white text-xl pt-5">
                            At Taste Coffe , each cup is a tale. From sourcing the<br/>
                            finest beans to crafting your brew, our story is woven<br/>
                            into every sip. Join us in a journey of flavor, warmth, <br/>
                            and community. Welcome to a place where coffee isn't just<br/>
                            a drink; it's a story waiting to unfold.

                        </p>
                    </div>

                </div>




            </>
        );
    }
}
