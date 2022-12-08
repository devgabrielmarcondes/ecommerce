import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

const Notification = ({ open, setOpen, type }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handleClose}
          style={{
            backgroundColor: "black",
            marginTop: "80px",
          }}
          severity={
            type === "copy"
              ? "info"
              : type === "remove"
              ? "error"
              : type === "remind"
              ? "warning"
              : "success"
          }
          variant="filled"
        >
          {type === "add"
            ? "Adicionado com sucesso!"
            : type === "update"
            ? "Atualizado com sucesso!"
            : type === "remove"
            ? "Removido com sucesso!"
            : type === "remind"
            ? "Por favor selecione a cor e o tamanho primeiro."
            : "Copiado para a área de transferência!"}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default Notification;
