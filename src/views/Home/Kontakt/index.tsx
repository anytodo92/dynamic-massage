import {
  KontaktWrapper,
} from "./styled";

const Kontakt = (): JSX.Element => {
  return (
    <KontaktWrapper>
      <div className="content">
        <h1>Kontakt & Terminvereinbarung</h1>
        <div className="yform">
          <form>
            <div className="form">
              <div className="col">
                <div className="group">
                  <label>Vorname <sup>*</sup></label>
                  <div className="form-group">
                    <label className="control-label"></label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="group">
                  <label>Name <sup>*</sup></label>
                  <div className="form-group">
                    <label className="control-label"></label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="group">
                  <label>Telefon <sup>*</sup></label>
                  <div className="form-group">
                    <label className="control-label"></label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="group">
                  <label>E-Mail</label>
                  <div className="form-group">
                    <label className="control-label"></label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="group">
                  <label>Bemerkung</label>
                  <div className="form-group">
                    <label className="control-label"></label>
                    <textarea className="form-control"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button>Absenden</button>
            </div>
          </form>
        </div>
      </div>
    </KontaktWrapper>
  );
};

export default Kontakt;