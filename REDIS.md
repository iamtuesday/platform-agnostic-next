## Reiniciar Redis por la fuerza

sudo systemctl kill redis-server
sudo systemctl restart redis-server
sudo kill -9 996900
sudo systemctl restart redis-server

## Verificar espacio en disco

df -h

## Revisar permisos de archivos

ls -ld /var/lib/redis
sudo chown redis:redis /var/lib/redis
sudo chmod 700 /var/lib/redis

## Inspeccionar los registros de Redis

sudo tail -f /var/log/redis/redis-server.log

## Deshabilitar temporalmente el guardado de snapshots RDB

sudo nano /etc/redis/redis.conf

# save 900 1

# save 300 10

# save 60 10000

stop-writes-on-bgsave-error no

## Reinicia

sudo systemctl restart redis-server

## . Probar la persistencia manualmente

redis-cli SAVE

## Reconstruir archivos RDB corruptos

sudo systemctl stop redis-server
sudo mv /var/lib/redis/dump.rdb /var/lib/redis/dump.rdb.bak
sudo systemctl start redis-server

## Inicia

sudo systemctl status redis-server
