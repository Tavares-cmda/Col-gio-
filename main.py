# =============================================================================
#           SISTEMA AUTOMÁTICO DE SINAL DA ESCOLA - TRABALHO ESCOLAR
#           Desenvolvido por: Pedro
#           Horários: Manhã e Tarde - Segunda a Sexta-feira
# =============================================================================

import schedule
import time
import pygame
import os
import sys
from datetime import datetime
from typing import List, Tuple

# ========================= CONFIGURAÇÕES DO SISTEMA =========================

SOUND_FILE = "sino.mp3"              # Nome do arquivo de som
USE_SOUND = True                     # True = toca som real | False = só mostra no console (modo teste)
DURACAO_TOQUE = 8                    # Quantos segundos o sino toca
INTERVALO_CHECK = 1                  # Verifica a cada 1 segundo

# Lista completa de todos os horários e mensagens
HORARIOS: List[Tuple[str, str]] = [
    # === TURNO DA MANHÃ ===
    ("07:05", "Início da 1ª aula da manhã"),
    ("07:55", "Início da 2ª aula da manhã"),
    ("08:45", "Início da 3ª aula da manhã"),
    ("09:35", "Recreio - Saída para o pátio"),
    ("09:50", "Volta do recreio - Início da 4ª aula"),
    ("10:40", "Início da 5ª aula da manhã"),
    ("11:30", "Fim das aulas da manhã - Saída para casa"),

    # === TURNO DA TARDE ===
    ("13:05", "Início da 1ª aula da tarde"),
    ("13:55", "Início da 2ª aula da tarde"),
    ("14:45", "Início da 3ª aula da tarde"),
    ("15:35", "Recreio da tarde - Saída para o pátio"),
    ("15:50", "Volta do recreio - Início da 4ª aula da tarde"),
    ("16:40", "Início da 5ª aula da tarde"),
    ("17:30", "Fim das aulas da tarde - Saída para casa"),
]

# =============================================================================

def limpar_tela():
    """Limpa a tela do terminal (funciona no Windows e Linux/Mac)"""
    os.system('cls' if os.name == 'nt' else 'clear')


def tocar_sinal(mensagem: str):
    """Função responsável por tocar o sinal e exibir mensagem formatada"""
    agora = datetime.now().strftime("%H:%M:%S")
    data_atual = datetime.now().strftime("%d/%m/%Y")
    
    print("\n" + "=" * 85)
    print(f"🛎️  SINAL DA ESCOLA TOCADO")
    print(f"📅 Data: {data_atual}   ⏰ Hora: {agora}")
    print(f"📢 {mensagem.upper()}")
    print("=" * 85)
    
    if not USE_SOUND:
        print("   ⚠️  Modo de teste ativado (sem reprodução de áudio)")
        print("   O sinal seria tocado aqui se USE_SOUND estivesse True.")
        print("-" * 85)
        return
    
    if not os.path.exists(SOUND_FILE):
        print(f"   ❌ ERRO: Arquivo '{SOUND_FILE}' não encontrado!")
        print("   Coloque um arquivo chamado 'sino.mp3' na mesma pasta do programa.")
        print("-" * 85)
        return
    
    try:
        # Inicializa o pygame mixer
        pygame.mixer.init(frequency=44100, size=-16, channels=2, buffer=512)
        pygame.mixer.music.load(SOUND_FILE)
        pygame.mixer.music.play()
        
        print(f"   🔊 Tocando sino por {DURACAO_TOQUE} segundos...")
        
        # Aguarda o tempo definido ou até o som terminar
        tempo_inicio = time.time()
        while pygame.mixer.music.get_busy() and (time.time() - tempo_inicio) < DURACAO_TOQUE:
            time.sleep(0.1)
        
        pygame.mixer.music.stop()
        pygame.mixer.quit()
        
        print("   ✅ Sinal tocado com sucesso!")
        
    except Exception as e:
        print(f"   ❌ Erro ao reproduzir o som: {e}")
        print("   Certifique-se de que o pygame está instalado corretamente.")
    
    print("-" * 85)
    print()


def agendar_horarios():
    """Agenda todos os horários para segunda a sexta-feira"""
    print("📅 Agendando horários para Segunda a Sexta...\n")
    
    for horario, descricao in HORARIOS:
        schedule.every().monday.at(horario).do(tocar_sinal, descricao)
        schedule.every().tuesday.at(horario).do(tocar_sinal, descricao)
        schedule.every().wednesday.at(horario).do(tocar_sinal, descricao)
        schedule.every().thursday.at(horario).do(tocar_sinal, descricao)
        schedule.every().friday.at(horario).do(tocar_sinal, descricao)
        
        print(f"   ✅ {horario}  →  {descricao}")


def mostrar_informacoes_iniciais():
    """Mostra informações do sistema no início"""
    limpar_tela()
    print("=" * 85)
    print("          SISTEMA AUTOMÁTICO DE SINAL DA ESCOLA")
    print("                    Trabalho Escolar - Pedro")
    print("=" * 85)
    print(f"🕒 Data e hora atual: {datetime.now().strftime('%d/%m/%Y %H:%M:%S')}")
    print(f"🎵 Arquivo de som     : {'✅ Encontrado' if os.path.exists(SOUND_FILE) else '❌ Não encontrado'}")
    print(f"🔊 Som ativado        : {'Sim' if USE_SOUND else 'Não (modo teste)'}")
    print(f"⏰ Total de sinais/dia: {len(HORARIOS)}")
    print(f"📍 Dias da semana     : Segunda à Sexta")
    print("-" * 85)
    print("O sistema está rodando e vai tocar o sinal automaticamente nos horários acima.")
    print("Pressione Ctrl + C para parar o programa.")
    print("=" * 85 + "\n")


def main():
    """Função principal do programa"""
    mostrar_informacoes_iniciais()
    
    # Agenda todos os horários
    agendar_horarios()
    
    print("\n✅ Sistema iniciado com sucesso! Aguardando os horários programados...\n")
    
    # Loop principal do programa
    try:
        while True:
            schedule.run_pending()
            time.sleep(INTERVALO_CHECK)
            
            # Mostra a hora atual a cada 30 segundos (para visualização)
            if int(time.time()) % 30 == 0:
                print(f"⏰ Hora atual: {datetime.now().strftime('%H:%M:%S')} - Sistema ativo", end="\r")
                
    except KeyboardInterrupt:
        print("\n\n🛑 Programa interrompido pelo usuário.")
        print("Obrigado por usar o Sistema de Sinal Automático da Escola!")
    except Exception as erro:
        print(f"\n❌ Ocorreu um erro inesperado: {erro}")
    finally:
        # Garante que o mixer do pygame seja fechado corretamente
        if pygame.mixer.get_init():
            pygame.mixer.quit()
        print("\nPrograma finalizado.")


# ======================== INÍCIO DO PROGRAMA ========================
if __name__ == "__main__":
    main()
