/* ==========================================================================
   Estrato — app.js
   Navegación, enlaces directos y formulario de contacto limpio.
   ========================================================================== */

(() => {
  'use strict';

  const CONTACT = {
    email: 'estratoagro@gmail.com',
    whatsapp: '5491100000000' // Formato internacional sin + ni espacios
  };

  // Menú móvil
  const menuToggle = document.getElementById('menu-toggle');
  const siteNav = document.getElementById('site-nav');

  if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
      const open = siteNav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
    siteNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Enlaces directos de contacto (Email directo)
  const displayEmail = document.getElementById('display-email');
  const directEmail = document.getElementById('direct-email');

  if (displayEmail) displayEmail.textContent = CONTACT.email;
  if (directEmail) {
    directEmail.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Consulta — Estrato')}`;
  }

  // Formulario clásico y limpio
  const form = document.getElementById('contact-form');
  const formError = document.getElementById('form-error');
  const formSuccess = document.getElementById('form-success');
  const sentMail = document.getElementById('sent-mail');
  const sentGmail = document.getElementById('sent-gmail');
  const sentCopy = document.getElementById('sent-copy');
  const copyFeedback = document.getElementById('copy-feedback');
  const sentReset = document.getElementById('sent-reset');
  let lastCopyText = '';

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const org = form.org.value.trim();
      const reply = form.reply.value.trim();
      const msg = form.msg.value.trim();

      form.name.classList.toggle('is-invalid', !name);
      form.reply.classList.toggle('is-invalid', !reply);
      form.msg.classList.toggle('is-invalid', !msg);

      if (!name || !reply || !msg) {
        formError.textContent = 'Por favor completá tu nombre, contacto y mensaje.';
        return;
      }

      formError.textContent = '';
      if (copyFeedback) copyFeedback.textContent = '';
      const subject = `Consulta Estrato — ${name}${org ? ` (${org})` : ''}`;
      const text = [
        `Nombre: ${name}${org ? ` (${org})` : ''}`,
        `Contacto: ${reply}`,
        '',
        msg
      ].join('\n');

      const mailtoUrl = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
      lastCopyText = `Para: ${CONTACT.email}\nAsunto: ${subject}\n\n${text}`;

      if (sentMail) sentMail.href = mailtoUrl;
      if (sentGmail) sentGmail.href = gmailUrl;

      form.hidden = true;
      formSuccess.hidden = false;
    });

    if (sentCopy) {
      sentCopy.addEventListener('click', () => {
        if (!lastCopyText) return;
        const notifyCopied = () => {
          if (copyFeedback) copyFeedback.textContent = 'Consulta y email copiados. Pegalos en tu correo.';
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(lastCopyText).then(notifyCopied).catch(() => {
            const ta = document.createElement('textarea');
            ta.value = lastCopyText;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            notifyCopied();
          });
        } else {
          const ta = document.createElement('textarea');
          ta.value = lastCopyText;
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          notifyCopied();
        }
      });
    }

    if (sentReset) {
      sentReset.addEventListener('click', () => {
        if (copyFeedback) copyFeedback.textContent = '';
        formSuccess.hidden = true;
        form.hidden = false;
      });
    }
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
