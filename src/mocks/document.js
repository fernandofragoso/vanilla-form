export const forms = `
  <section id="request-form-section" class="">
    <div id="request-form">
      <div class="form__item">
        <label for="select1" class="form__label">select1</label>
        <select id="select1" class="form__input" name="select1" required="">
          <option value="">mask1</option>
          <option value="option1">option1</option>
          <option value="option2">option2</option>
        </select>
        <span class="form__helper-text"></span>
      </div>
      <div class="form__item">
        <label for="select2" class="form__label">select2</label>
        <select id="select2" class="form__input" name="select2">
          <option value="">mask2</option>
          <option value="option1">option1</option>
          <option value="option2">option2</option>
        </select>
        <span class="form__helper-text"></span>
      </div>
    </div>
    <button id="button-search" type="button" class="form__button">
        BUSCAR PROFISSIONAIS
    </button>
  </section>
  <section id="user-form-section" class="invisible">
    <div id="user-form">
      <div class="form__item">
        <label for="text" class="form__label">text</label>
        <input id="text-input" type="text" class="form__input" name="text" placeholder="" required="">
        <span class="form__helper-text"></span>
      </div>
    </div>
    <button id="button-finish" type="button" class="form__button">
        FINALIZAR
    </button>
  </section>
`;